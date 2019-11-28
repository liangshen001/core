import {MoonApplication} from "../lib/moon-application";
import {MoonBootApplication} from "../lib/decorators/moon-boot-application.decorator";
import {ApplicationRunner} from "../lib/application-runner";

@MoonBootApplication()
export class Main implements ApplicationRunner {

    constructor() {}

    run(): void {

    }
}


MoonApplication.run(Main);

