import moment from 'moment';
import R      from 'ramda';

const activityItems = [

  { icon: 'subscriptions', title: "A whole new course", subtitle: 'Course published', by: 'Martin Scorsese', timestamp: new Date('2016-03-24 12:34') },
  { icon: 'subscriptions', title: "How to build the perfect dashboard", subtitle: 'Course created', by: 'Robert de N.', timestamp: new Date('2016-03-18 09:57') },
  { icon: 'subscriptions', title: "This one was not good enough", subtitle: 'Course archived', by: 'Robert de N.', timestamp: new Date('2016-03-14 16:15') },

  { icon: 'theaters', title: "The story of Penelope", subtitle: 'Media uploaded', by: 'Sisiphe', timestamp: new Date('2016-03-18 14:37') },
  { icon: 'theaters', title: "12 decoration ideas", subtitle: 'Media uploaded', by: 'Valérie D.', timestamp: new Date('2016-03-22 11:03') },

  { icon: 'verified_user', title: "What about indicators ?", subtitle: "Survey published", by: 'Julian A.', timestamp: new Date('2016-03-18 23:47') },
  { icon: 'verified_user', title: "Learn to learn", subtitle: "e-learning published", by: 'Gabriel', timestamp: new Date('2016-03-20 15:24') },
  { icon: 'verified_user', title: "Test your knowledge", subtitle: "Quizz published", by: 'Gabriel', timestamp: new Date('2016-03-22 10:30') },

  { icon: 'mail_outline', title: "b-eden goes 2.0", subtitle: "Mailing sent", by: 'Gabriel', timestamp: new Date('2016-03-24 11:13') }

]

export const activity = () => {
  return R.pipe(
    R.sort( (a, b) => ( b.timestamp - a.timestamp ) ),
    R.groupBy( i => moment(i.timestamp).format('YYYY-MM-DD') ),
    R.mapObjIndexed( (items, dt) => ( { day: new Date(dt), items: items } ) ),
    R.values
  )(activityItems);
};
