interface RecursiveObject {
    [key: string]: any[] | RecursiveObject[];
}
  
export interface MenuObject {
    lista: RecursiveObject[];
}