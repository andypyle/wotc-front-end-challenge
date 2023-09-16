export function arrayToObj<T>(arr: Array<T>, prop: keyof T) {
  let obj: { [key: string]: any } = {}

  if (Array.isArray(arr)) {
    arr.forEach((i: T) => {
      obj[i[prop] as string] = i
    })

    return obj
  }
}
