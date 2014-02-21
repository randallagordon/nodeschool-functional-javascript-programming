"use strict";

function repeat(op, n) {
  if(n) {
    op();
    repeat(op, n - 1);
  }
};

module.exports = repeat;
