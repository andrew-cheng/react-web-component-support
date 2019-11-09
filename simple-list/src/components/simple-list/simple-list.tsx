import { Component, Host, h, Event, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'simple-list',
  shadow: true
})
export class SimpleList {

  @Prop() list: { first: string, last: string }[];

  @Event() vote: EventEmitter;

  render() {
    return (
      <Host>
        <ul>
          {this.list.map(item => <li>{item.first} {item.last} <button onClick={() => this.vote.emit(item)}>vote</button></li>)}
        </ul>
      </Host>
    );
  }

}
