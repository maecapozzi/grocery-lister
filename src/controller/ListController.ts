import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { List } from "../entity/List";

export class ListController {
  private listRepository = getRepository(List);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.listRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.listRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.listRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let listToRemove = await this.listRepository.findOne(request.params.id);
    await this.listRepository.remove(listToRemove);
  }
}
