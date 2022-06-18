export function add(a: number, b: number): number{
    return a+b;
}

export function addPromise(a: number, b: number) :  Promise<number>{
    return new Promise(function(resolve, reject){
        resolve(a+b);
    })
}