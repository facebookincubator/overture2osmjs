/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const encodeFeature = (feature, vocab) =>{
    const encoded = Array(vocab.length).fill(0); 
    const index = vocab.indexOf(feature); 
    if (index !== -1) {
        encoded[index] = 1;
    }
    return encoded;
}
