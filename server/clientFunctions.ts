export async function isNameGloballyUnique(
    val: string,
): Promise<boolean> {
    if (val) {
        
        var response = await fetch(
            window.location.origin + "/api/uniquename?uniqueName=" + val,
            {
                credentials: "include",
            },
        );

        return response.ok;
    }
    return true;
}

export async function doesEmailExist(
    val: string,
): Promise<boolean> {
    if (val) {
        
        var response = await fetch(
            window.location.origin + "/api/doesEmailExist?email=" + val,
            {
                credentials: "include",
            },
        );


        return response.ok;
    }
    return true;
}

export async function emailIsNotUser(
    val: string,
    awaesumUserName?:string
): Promise<boolean> {
    if (val) {
        return val !== awaesumUserName;
    }
    return true;
}