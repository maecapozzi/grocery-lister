import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as faker from "faker";
import { Request, Response } from "express";
import { routes } from "./routes";
import { User } from "./entity/User";

createConnection()
  .then(async connection => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    routes.forEach(route => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then(result =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    const buildFakeUsers = () => {
      let users = [];

      for (let index = 0; index < 1000; index++) {
        users.push({
          email: faker.internet.email(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName()
        });
      }

      return users;
    };

    const users = buildFakeUsers();

    users.forEach(user => {
      let userRecord = new User();

      userRecord.email = user.email;
      userRecord.firstName = user.firstName;
      userRecord.lastName = user.lastName;

      const userRepository = connection.getRepository(User);

      userRepository
        .save(user)
        .then(user => console.log("user has been saved: ", user))
        .catch(error => console.log("Cannot save. Error: ", error));
    });

    // start express server
    app.listen(3000);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch(error => console.log(error));
