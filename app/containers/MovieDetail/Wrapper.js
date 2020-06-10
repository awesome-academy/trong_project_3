import styled from "styled-components";
import { color_darkgrey,color_gray,color_smokegrey,color_linear1,breakpoint_sm,breakpoint_lg} from "utils/variable";
export default styled.div`
  padding : 100px 0 50px;
  background-color:white;
  p,span,h1{
    font-family:'Roboto', sans-serif;
  }
  .movie{
    &__box{
      display:flex;
      flex-direction:column;
    }
    &__img{
      height:700px;
      img{
        object-position:center;
      }
    }
    &__infor{
      &>h1{
        font-weight:300;
      }
      &-star{
        white-space:nowrap;
        &>span{
          display:block;
          &:nth-child(1){
            font-size:2rem;
            color:${color_darkgrey};
            margin-right:10px;
            font-weight:bolder;
          }
          &:nth-child(3){
            font-size:1.3rem;
            color:${color_darkgrey};
            margin-left:10px;
            span{
              margin-left:5px;
            }
          }
        }
        display:flex;
        align-items: center;
        .star-ratings{
          padding:0 10px;
          border-left: 2px solid ${color_darkgrey};
          border-right: 2px solid ${color_darkgrey};
        }
      }
      &>p{
        margin-top:5px;
        font-weight:500;
        font-size:1.4rem;
        &>span{
          &:nth-child(1){
            color:${color_gray};
          }
          &:nth-child(2){
            color:${color_darkgrey};
          }
        }
      }
      &>a{
        display:inline-block;
        margin-top:10px;
        padding:7px 14px;
        background-color:${color_linear1};
        color:white;
        font-size:1.7rem;
      }
    }
    &__description{
      &>h1{
        color:${color_smokegrey};
        display:inline-block;
        padding-bottom : 10px;
        border-bottom: 2px solid ${color_linear1};
      }
      &>p{
        font-size:1.3rem;
        color:${color_gray};
        max-width:700px;
      }
      iframe{
        display:block;
        width:100%;
        height:300px;
      }
    }
  }
  @media all and (min-width:${breakpoint_sm}) {
    .movie{
      &__box{
        flex-direction:initial;
      }
      &__img{
        height : 500px;
        padding-right: 20px;
      }
      &__infor{
        transform:translateY(-4%);
      }
      &__description{
        &>iframe{
          height:500px;
          width:80%;
        }
      }
    }
  }
  @media all and (min-width:${breakpoint_lg}) {
    .movie{
      &__img{
        height : 500px;
        width:400px;
        padding-right: 20px;

      }
      &__infor{
        margin-left:50px;
        &>p{
          margin-top:15px;
        }
        &>a{
          margin-top:30px;
        }
      }
      &__description{
        &>iframe{
          height:500px;
          width:90%;
        }
      }
    }
  }
`
