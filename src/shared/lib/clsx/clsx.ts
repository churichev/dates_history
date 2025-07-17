type Falsy = false | 0 | '' | null | undefined;
type ClassNamesType = Array<string | Falsy>;

export function clsx(...classNames: ClassNamesType): string {
    return classNames.reduce<string>((resultClassNames: string, currentClassName) => {
        if (currentClassName) {
            resultClassNames += ` ${currentClassName}`;
        }

        return resultClassNames;
    }, '');
}
