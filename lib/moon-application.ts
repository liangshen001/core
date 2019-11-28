import {Constructor} from "./types/constructor";
import {DecoratorUtil} from "ts-decorators-utils";

export class MoonApplication {
    public static run<T>(mainClass: Constructor<T>) {
        let metadata = Reflect.getMetadata("design:paramtypes", mainClass);
        console.log(metadata);

        // const instance = new mainClass();

    }
}
