'use client'

import { useState } from 'react';

import {Button, Dialog, DialogTrigger, Popover} from 'react-aria-components';
import Typography, { TYPOGRAPHY_TYPES } from '../Typography';

import { cn } from '@/lib/utils';

import './qa.css'

const Qa = () => {

  const [isQ1Open, setIsQ1Open] = useState(false);
  const [isQ2Open, setIsQ2Open] = useState(false);

  return (
    <section className='flex flex-col items-center justify-center gap-6'>
      <DialogTrigger>
      <Button className="questionButton" onClick={() => { setIsQ1Open(!isQ1Open) }} >
        <Typography type={TYPOGRAPHY_TYPES.h4} classes={cn("text-primary cursor-pointer")}>What?</Typography>
        <div className={cn({
          ["w-0"]: !isQ1Open,
          ["w-full"]: isQ1Open,
          ["questionLine"]: true,
        })}/>
      </Button>
      <Popover isOpen={isQ1Open} onOpenChange={setIsQ1Open} placement='start' className={cn("answerPopover", "bg-background2 p-4 border border-solid border-primary rounded-sm shadow-md shadow-primary max-w-72")}>
        <Dialog>
          <Typography type={TYPOGRAPHY_TYPES.body}>A website to showcase the screenshots I've taken over my years of playing video games</Typography>
        </Dialog>
      </Popover>
    </DialogTrigger>
    <DialogTrigger>
      <Button className="questionButton" onClick={() => { setIsQ2Open(!isQ2Open) }} >
        <Typography type={TYPOGRAPHY_TYPES.h4} classes={cn("text-primary cursor-pointer")}>Why?</Typography>
        <div className={cn({
          ["w-0"]: !isQ2Open,
          ["w-full"]: isQ2Open,
          ["questionLine"]: true,
        })}/>
      </Button>
      <Popover isOpen={isQ2Open} onOpenChange={setIsQ2Open} placement='start' className={cn("answerPopover", "bg-background2 p-4 border border-solid border-primary rounded-sm shadow-md shadow-primary max-w-72")}>
        <Dialog>
            <ol className='list-decimal list-outside pl-4'>
              <li><Typography type={TYPOGRAPHY_TYPES.body}>Steam's screenshot page is barely functional (would stop loading more images after a while) </Typography></li>
              <li><Typography type={TYPOGRAPHY_TYPES.body}>I could aggregate screenshots from games I've played in other platforms in one place</Typography></li>
              <li><Typography type={TYPOGRAPHY_TYPES.body}>I wanted to try out next.js's app router so might as well build something</Typography></li>
            </ol>
        </Dialog>
      </Popover>
    </DialogTrigger>
    </section>
  )
}

export default Qa