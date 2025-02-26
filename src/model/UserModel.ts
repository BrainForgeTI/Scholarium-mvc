import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./entity/UserModel";
import { Model } from "mongoose";

@Injectable()
export class UserModel {

    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
    ) {}

    public createNewUser(newUser: User) {
        return this.userModel.create(newUser);
    }

    public getAllUsers() {
        return this.userModel.find({});
    }

    public getUsersById(id: string) {
        return this.userModel.findById({ _id: id });
    }

    public updateUser(id: string, newUser: User) {
        return this.userModel.findByIdAndUpdate(id, newUser, { new: true });
    }
    
    public deleteUserById(id: string) {
        return this.userModel.findByIdAndDelete({ _id: id });
    }
}
