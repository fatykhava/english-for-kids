import topicsArrJson from '../words.json';

export default class GetTopicJSON {
  constructor() {
    this.topicObj = {};
  }

  getTopic(keyTopic) {
    topicsArrJson.forEach((section) => {
      if (section.topic === keyTopic) this.topicObj = section;
    });
    return this.topicObj;
  }
}
