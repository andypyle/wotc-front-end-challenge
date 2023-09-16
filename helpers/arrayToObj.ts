// This is for faster lookups when importing a list of ids.
export function arrayToObj<T>(arr: Array<T>, prop: keyof T) {
  let obj: { [key: string]: any } = {}

  if (Array.isArray(arr)) {
    arr.forEach((i: T) => {
      obj[i[prop] as string] = i
    })

    return obj
  }
}
