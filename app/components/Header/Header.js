import styled from "styled-components";
import { color_dark,color_linear1,color_green,color_border  } from "utils/variable";

const  header =  styled.div`
  position: fixed;
  top:0;
  left:0;
  background-color:white;
  width:100%;
  z-index:10001;
  padding:5px 0;
  &>div{
    display:flex;
    align-items: center;
    justify-content:space-between;
  }
  i{
    font-size: 2rem;
    cursor: pointer;
    color: ${color_dark};
  }
  .left__header{
    display: flex;
    align-items:center;
    &-link{
        display: flex;
        align-items:center;
        a{
        display:block;
        text-align:center;
        color: ${color_dark};
        font-size:1.3rem;
        padding : 5px 0;
        border: 2px solid ${color_dark};
        margin-right: 10px;
        width : 70px;
        border-radius: 5px;
        transition: all .35s ease;
        &:nth-child(1){
          &:hover{
            border-color : ${color_linear1};
            color: ${color_linear1} ;
          }
        }
        &:nth-child(2){
          &:hover{
            border-color : ${color_green};
            color: ${color_green} ;
          }
        }
      }
    }
    &-user{
      position:relative;
      margin-right:10px;
    }
    &-img{
      height:45px;
      width:45px;
      cursor: pointer;
      img{
        object-fit:scale-down;
      }
      &:hover + .left__header-dropdown{
        transform: translateY(0);
        opacity:1;
        visibility:visible;
      }
    }
    &-dropdown{
      position:absolute;
      top:132%;
      right:30%;
      padding: 3px 5px 10px 5px;
      display:flex;
      flex-direction:column;
      background-color:white;
      transform: translateY(-7px);
      opacity:0;
      visibility:hidden;
      transition: all .35s ease;
      transition-delay:0.15s;
      a,button{
        white-space:nowrap;
        margin-top:5px;
        cursor: pointer;
        font-size:1.3rem;
      }
      a{
        display:block;
        padding : 5px 20px;
        color: black;
        border-bottom: 1px solid ${color_border};
        &:hover{
          background-color:rgba(241,188,0,0.3);
        }
      }
      button{
        background-color:rgba(187,81,30,0.5);
        margin:10px auto 0;
        color:white;
        font-weight:bolder;
        padding:5px 10px;
        &:hover{
          background-color:${color_linear1};
        }
      }
      &:hover{
        transform: translateY(0);
        opacity:1;
        visibility:visible;
      }
    }
    &-search{
      position:relative;
      margin-right:10px;
      input{
        font-size:1.4rem;
        border: none;
        padding:5px;
        border-bottom: 2px solid ${color_dark};
        &::placeholder{
          font-style:italic;
        }
        &:focus{
          outline:none;
        }
      }
      &-box{
        position:absolute;
        top:55px;
        left:0;
        background-color:white;
        padding: 20px 10px;
        width:200%;
        a{
          display:flex;
          border-bottom: 1px solid ${color_border};
          padding:10px 0;
          img{
            height:100px;
            width:100px;
            object-fit:scale-down;
          }
          h2{
            font-weight:200;
            color:black;
            font-size:1.7rem;
          }

        }
      }
    }

  }

`
export default header;
