import { div, input, txt } from '../../dom-api/make-dom'
import { $ } from '../../dom-api/selector'


/**
    #Task:
    Calculate the dimensions (volume) of the object, taking values from the inputs: height, width and length

    #Goal:
    Showing the equivalent of Promise.all using data streams.
    Showing differences between 2 approaches using helper functions (static operators): zip and combineLatest
 */

  // Helper DOM wrappers:
  const inputHeight = input({name: 'height', placeholder: 'height...'});
  const inputWidth = input({name: 'width', placeholder: 'width...'});
  const inputLength = input({name: 'length', placeholder: 'length...'});
  const resultDiv = div([txt('0 m3')]);

  // Your solution:


  // HTML Boilerplate:
  const inputsDOM = $('#inputs');
  const resultWrapperDOM = $('#resultWrapper');
  inputsDOM.appendChild(inputHeight);
  inputsDOM.appendChild(inputWidth);
  inputsDOM.appendChild(inputLength);
  // ----
  resultWrapperDOM.appendChild(resultDiv);

