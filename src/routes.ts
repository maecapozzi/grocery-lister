import { UserController } from "./controller/UserController";
import { ListController } from "./controller/ListController";
import { ItemController } from "./controller/ItemController";

export const routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
  },
  {
    method: "get",
    route: "/lists",
    controller: ListController,
    action: "all"
  },
  {
    method: "get",
    route: "/lists/:id",
    controller: ListController,
    action: "one"
  },
  {
    method: "post",
    route: "/lists",
    controller: ListController,
    action: "save"
  },
  {
    method: "delete",
    route: "/lists/:id",
    controller: ListController,
    action: "remove"
  },
  {
    method: "get",
    route: "/items",
    controller: ItemController,
    action: "all"
  },
  {
    method: "get",
    route: "/items/:id",
    controller: ItemController,
    action: "one"
  },
  {
    method: "post",
    route: "/items",
    controller: ItemController,
    action: "save"
  },
  {
    method: "delete",
    route: "/items/:id",
    controller: ItemController,
    action: "remove"
  }
];
