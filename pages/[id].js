import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData, getDataTwo} from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
   //console.log(itemData);
  const itemDataTwo = await getDataTwo(params.id);
   console.log(itemDataTwo);
  return {
    props: {
      itemData, itemDataTwo
    }
  };
}



export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData, itemDataTwo}) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
          <p className="card-text">{itemData.birthdate}</p>
          <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
          <h5 className="cart-title">{itemDataTwo.name}</h5>
          <h6 className="card-subtitle">{itemDataTwo.connection}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{itemDataTwo.phone}</h6>
          <p className="card-text">{itemDataTwo.birthdate}</p>
          <a href={'mailto:' + itemDataTwo.email} className="card-link">{itemDataTwo.email}</a>
        </div>
        
      </article>
    </Layout>
  );
}