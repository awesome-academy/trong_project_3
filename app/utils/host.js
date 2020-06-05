export const host = "https://api.themoviedb.org/3";
export const hostImg = "https://image.tmdb.org/t/p/w500";

export const option = ( method = "GET",item={})=>{
  return {
    method:method,
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTNjNzUzMjIzZDMwYWU5MGE1ZjVkYzc0ZGZiYzljYyIsInN1YiI6IjVlZDIwMDNjMjFjNGNhMDAyMWRmZmEwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g9e5eoG7oOagOx8L0bYL4ljmstWbN6xd-sHUwob9n-A'
    },
    ...item
  };
}
