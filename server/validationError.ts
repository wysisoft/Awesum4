export interface ValidationError {
    instancePath: string;
    schemaPath: string;
    keyword: string;
    params: any;
    message: string;
}

