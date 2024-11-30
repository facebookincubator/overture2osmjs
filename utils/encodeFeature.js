export const encodeFeature = (feature, vocab) =>{
    const encoded = Array(vocab.length).fill(0); 
    const index = vocab.indexOf(feature); 
    if (index !== -1) {
        encoded[index] = 1;
    }
    return encoded;
}
