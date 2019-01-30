export function Authenticated(parameter: string = 'authed', msg: string = 'Unauthorized access.') {
    return function(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value; // save a reference to the original method
    
        descriptor.value = function(...args: any[]) {
            const [req, res] = args;
    
            if (req[parameter]) {
                return originalMethod.apply(this, args);
            }
            res.status(401).send(msg);
            return false;
        };
    
        return descriptor;
    }
}
