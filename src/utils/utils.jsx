export const levelCalculator = (importeTotal) => {
    const levels = {
        level1:Number(process.env.REACT_APP_LEVEL_1),
        level2:Number(process.env.REACT_APP_LEVEL_2)
    }
    const ImportePositivo = +importeTotal < 0 ? +importeTotal * (-1) : +importeTotal
    if(ImportePositivo < levels.level1) {
        return 1
    }
    if(ImportePositivo < levels.level2) {
        return 2
    }
    return 3 
}

export const getUserNameFromWindowsLogin = (windowsJson) => {
    const {user_claims} = windowsJson
    const userName = user_claims.find(claim => claim.typ == "name")
    return userName.val
}

export const getIdFromMail = (windowsJson) => {
    const {user_id} = windowsJson
    const user = user_id.substring(0,user_id.indexOf("@"))
    return user
}

export const obtenerSiguienteReponsable = (data, pasoActual) => {
    const siguientePaso = data.find(paso => paso.orden > pasoActual)
    if (siguientePaso) {
        return siguientePaso.responsable.trim()
    }
    return null
}