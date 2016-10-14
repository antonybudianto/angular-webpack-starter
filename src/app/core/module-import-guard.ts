export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
}
