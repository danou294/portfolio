"use client";

import React from "react";

type MotionOnlyProps = {
  animate?: unknown;
  custom?: unknown;
  drag?: unknown;
  dragConstraints?: unknown;
  exit?: unknown;
  initial?: unknown;
  layout?: unknown;
  layoutId?: unknown;
  transition?: unknown;
  variants?: unknown;
  viewport?: unknown;
  whileFocus?: unknown;
  whileHover?: unknown;
  whileInView?: unknown;
  whileTap?: unknown;
};

function createMotionElement<Tag extends keyof React.JSX.IntrinsicElements>(tag: Tag) {
  return function MotionElement({
    animate,
    custom,
    drag,
    dragConstraints,
    exit,
    initial,
    layout,
    layoutId,
    transition,
    variants,
    viewport,
    whileFocus,
    whileHover,
    whileInView,
    whileTap,
    ...props
  }: React.JSX.IntrinsicElements[Tag] & MotionOnlyProps) {
    void animate;
    void custom;
    void drag;
    void dragConstraints;
    void exit;
    void initial;
    void layout;
    void layoutId;
    void transition;
    void variants;
    void viewport;
    void whileFocus;
    void whileHover;
    void whileInView;
    void whileTap;

    return React.createElement(tag, props);
  };
}

export const motion = {
  a: createMotionElement("a"),
  article: createMotionElement("article"),
  button: createMotionElement("button"),
  div: createMotionElement("div"),
  footer: createMotionElement("footer"),
  h1: createMotionElement("h1"),
  h2: createMotionElement("h2"),
  h3: createMotionElement("h3"),
  li: createMotionElement("li"),
  p: createMotionElement("p"),
  section: createMotionElement("section"),
  span: createMotionElement("span"),
  ul: createMotionElement("ul"),
};

export function AnimatePresence({
  children,
  initial,
  mode,
}: {
  children: React.ReactNode;
  initial?: boolean;
  mode?: string;
}) {
  void initial;
  void mode;

  return <>{children}</>;
}
