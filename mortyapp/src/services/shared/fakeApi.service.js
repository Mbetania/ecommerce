export const consumeFakeApi = async(urlFakeApi) => {

    const data  = await fetch(urlFakeApi)
    console.log(data)
    // const datosJson = await datos.Json()
    
    return data.response.result
}