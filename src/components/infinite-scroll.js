import React, { Component } from 'react';

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      const { nextUrl, fetchSongsNext } = this.props;
      fetchSongsNext(nextUrl);
    }
  }

  render() {
    const { children, className } = this.props;

    return <div className={className}>{children}</div>;
  }
}

export default InfiniteScroll;
