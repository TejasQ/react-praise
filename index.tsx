import * as React from "react";
import { createPraise, Phrases, Config } from "praise";

export interface PraiseProps extends Config {
  /**
   * An object whose keys are strings of phrases to respond to,
   * the values of which are functions to execute upon
   * recognizing the phrase.
   */
  phrases: Phrases;

  /** Children ought to be a function that accept
   * the result of the recognized callback as input.
   */
  children: (output: any) => React.ReactChild;
}

export interface PraiseState {
  output?: any;
}

/**
 * A React wrapper for Praise that takes its
 * Config as top-level props and passes the
 * value returned from the callback response
 * to a phrase into its children using the
 * children as a function (or render props)
 * pattern.
 *
 * @augments React.Component<PraiseProps, PraiseState>
 */
class Praise extends React.Component<PraiseProps, PraiseState> {
  state: PraiseState = {};
  componentDidMount() {
    const { phrases, ...otherProps } = this.props;
    const { keepListening, onlyWhenIStop, confidence } = otherProps;
    createPraise(phrases, {
      keepListening,
      onlyWhenIStop,
      confidence,
      onSuccess: output => this.setState(() => ({ output }))
    }).start();
  }
  render() {
    const { children } = this.props;
    const { output } = this.state;
    return children(output);
  }
}

export default Praise;
