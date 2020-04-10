import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  paramsUrl: PropTypes.shape({}),
  fetchSongsNext: PropTypes.func.isRequired,
  currentPlaylist: PropTypes.string
};

const withInfiniteScroll = InnerComponent => {
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
        const { fetchSongsNext, paramsUrl, page, currentPlaylist } = this.props;
        fetchSongsNext(currentPlaylist, page + 1, paramsUrl);
      }
    }

    render() {
      const { className } = this.props;

      return (
        <div className={className}>
          <InnerComponent {...this.props} />
        </div>
      );
    }
  }

  InfiniteScroll.propTypes = propTypes;

  return InfiniteScroll;
};

export default withInfiniteScroll;
