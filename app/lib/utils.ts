import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * get condition
 * @param condition 
 * @returns {String}
 */
export const getConditionSymbol = (condition: string): string => {
    switch (condition) {
        case 'eq':
            return '===';
        case 'neq':
            return '!==';
        case 'gt':
            return '>'
        case 'gte':
            return '>='
        default:
            return 'contains';
    }
};

/**
 * custruct the header of the response
 * @param message
 * @param status 
 * @param data 
 * @returns {Object}
 */
 export const getApplicationStatus = (message: string, status: string, data: any): void => {
    const apiResponse: any = {
      message: message,
      status: status,
      data: data
    }
    return apiResponse;
 }

/**
 * * get data on success
 * @param message 
 * @param status 
 * @param data 
 * @returns
 */
export const onSuccess = (message: string, data: any ): any => {
    return getApplicationStatus(message, 'success', data);
}
 
/**
 * get data on fail
 * @param message 
 * @param status 
 * @param data 
 * @returns {null}
 */
export const onFailure = (message: string, status: string, data: any): any => {
    return getApplicationStatus(message, status, data);
}