

import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "replacePipe"
})
export class ReplacePipe implements PipeTransform {
    transform(value: string, replaceValue: string, replacement: string) {
        return value.replaceAll(replaceValue, replacement)
    }
}