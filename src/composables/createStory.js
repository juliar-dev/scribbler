import { projectFirestore } from '../firebase/config';

const createStory = (story) => {
    const error = (null);

    projectFirestore.collection('stories')
    .add(story)
    .catch(err => {
        error.value = err.message
    });

    return { error }
}

export default createStory;