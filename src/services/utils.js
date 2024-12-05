export const getAuthRole = (token) => { 
    // Отримання частини токена
    const extractedToken = token.split('.')[1];
    
    // Замінюємо Base64Url на Base64
    const base64Url = extractedToken.replace(/-/g, '+').replace(/_/g, '/');
    
    // Додаємо правильну кількість символів '=' для вирівнювання
    const padding = '='.repeat((4 - base64Url.length % 4) % 4);
    const base64 = base64Url + padding;

    // Декодуємо та парсимо JSON
    const atobData = window.atob(base64);
    const finalData = JSON.parse(atobData);

    return finalData.role;
}