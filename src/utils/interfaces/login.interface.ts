export interface LoginResponse {
    access_token: string,
    token_type: string,
    user_id: number,
    email: string
}

export interface LoginRequest {
    email: string,
    password: string
}
