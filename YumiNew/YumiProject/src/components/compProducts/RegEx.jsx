
export const validName = new RegExp(
    '^[a-z]{2,30}$/i'
    /* "^([A-z])+(.?[a-zA-Z])('?[a-zA-Z])$" */
);

export const validNumber = new RegExp(
    '[^\d{10}$]'
);

// export const validTime = new RegExp(
//     '[/d{4}]'
// )