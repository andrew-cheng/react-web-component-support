import { Component, Host, Method, h } from '@stencil/core';

@Component({
  tag: 'simple-logger',
  shadow: true
})
export class SimpleLogger {

  @Method()
  async logSomething(something: string) {
    console.log(something);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
