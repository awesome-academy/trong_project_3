import { takeLatest,put,call } from "redux-saga/effects";
import {FETCH_MOVIE_DETAIL} from "./constans";
import {fetchMovieDetailSuccess,fetchMovieDetailError} from "./actions";
import request from "utils/request";
import { host,option } from "../../utils/host";

function* getMovieDetail({id}) {
  try {
    const url=`${host}/movie/${id}`;
    const result = yield call(request,url,option());
    const videos = yield call(request,`${host}/movie/${id}/videos`,option());
    yield put(fetchMovieDetailSuccess({
      ...result,
      video:videos.results[0]
    }));
  } catch (error) {
    yield put(fetchMovieDetailError());
  }
}
export default function* () {
  yield takeLatest(FETCH_MOVIE_DETAIL,getMovieDetail);
}
