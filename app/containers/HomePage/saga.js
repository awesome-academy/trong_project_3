import { takeLatest,call,put } from "redux-saga/effects";
import request from "utils/request";
import { host,option } from "utils/host";
import { FETCH_HOT_MOVIE,FETCH_HOT_CURRENTMOVIE,FETCH_HOT_UPCOMMINGMOVIE } from "./constans";
import { fetchHotMovieError,fetchHotMovieSuccess,fetchCurrentMovieSuccess,fetchCurrentMovieError,fetchUpComingMovieSuccess,fetchUpComingMovieError } from "./actions";

const host1 = 'http://localhost:3000/movies?_limit=6&';
function* getHotMovie() {
  try {
    const url = `${host}/discover/movie?page1&include_video=true`;
    const data = yield call(request,url,option());
    yield put(fetchHotMovieSuccess(data.results));
  } catch (error) {
    yield put(fetchHotMovieError(error))
  }
}
function* getCurrentMovie() {
  try {
    const url = `${host1}status=0`;
    const data = yield call(request,url);
    yield put(fetchCurrentMovieSuccess(data));
  } catch (error) {
    yield put(fetchCurrentMovieError(error));
  }
}
function* getUpcomingMovie() {
  try {
    const url = `${host1}status=1`;
    const data = yield call(request,url);
    yield put(fetchUpComingMovieSuccess(data));
  } catch (error) {
    yield put(fetchUpComingMovieError(error));
  }
}
export default function* () {
  yield takeLatest(FETCH_HOT_MOVIE,getHotMovie);
  yield takeLatest(FETCH_HOT_CURRENTMOVIE,getCurrentMovie);
  yield takeLatest(FETCH_HOT_UPCOMMINGMOVIE,getUpcomingMovie);
}
