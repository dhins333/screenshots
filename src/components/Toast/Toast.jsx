'use client'

import React, { useRef } from "react"
import { useToast, useToastRegion } from "react-aria"
import {ToastQueue, useToastQueue} from 'react-stately';
import  Icon from '@/src/components/Icon'
import Typography, { TYPOGRAPHY_TYPES } from "../Typography";
import { colors } from "@/src/lib/colors";
import IconButton from "../IconButton";

import { toastSlideIn, toastSlideOut } from './toast.module.css'
import { cn } from "@/src/lib/utils";


export const toastQueue = new ToastQueue({
  maxVisibleToasts: 1
});

const GlobalToastRegion = (props) => {
  const state = useToastQueue(toastQueue);

  return state.visibleToasts.length > 0
    ? <ToastRegion {...props} state={state} />
    : null;
}

function Toast({ state, ...props }) {
  const ref = useRef(null);
  const latestCloseEvent = useRef(null)

  const { toastProps, contentProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref
  );

  const handleClosePress = (e) => {
    ref.current.classList.remove(toastSlideIn)
    ref.current.classList.add(toastSlideOut)
    latestCloseEvent.current = e
  }

  const onToastSlideOut = (e) => {
    const closeAnimationName = 'slideOutToRight'
    
    if (e.animationName.includes(closeAnimationName)) {
      ref.current.classList.remove(toastSlideOut)
      closeButtonProps.onPress(latestCloseEvent.current)
    }
  }

  return (
    <div {...toastProps} ref={ref} onAnimationEnd={onToastSlideOut} className= {cn("bg-background border-2 border-solid border-alert p-4 rounded-xl flex", toastSlideIn)}>
      <div {...contentProps}>
        <div {...titleProps} className="flex">
          <Icon name="info" color={colors.alert} backgroundColor={colors.background}/>
          <Typography type={TYPOGRAPHY_TYPES.body} classes="text-alert ml-4">{props.toast.content}</Typography>
        </div>
      </div>
      <IconButton {...closeButtonProps} onPress={handleClosePress} buttonClasses="ml-4 shadow-icon-button-alert" iconProps={{
        name: "x",
        colors: colors.alert,
        backgroundColor: colors.background,
        className: "border border-solid border-alert"
      }} />
    </div>
  );
}


const ToastRegion = (props) => {
  const { state } = props

  const ref = useRef(null)

  const { regionProps } = useToastRegion(props, state, ref)

  return (
    <div ref={ref} {...regionProps} className="fixed bottom-0 right-0 pr-9 pb-9">
      {state.visibleToasts.map((toast) => {
        return (<Toast key={toast.key} toast={toast} state={state} />)
      })}
    </div>
  )
}

export default GlobalToastRegion