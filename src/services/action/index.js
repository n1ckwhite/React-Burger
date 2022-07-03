export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_ORDER = 'GET_ORDER';


export default function checkResponse(response) {
    if (!response.ok) {
        throw new Error("Ответ сети был не ok.");
    }
    return response.json();
}