import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    return (
        <div className='bg-[purple] rounded-xl p-4 mt-4 text-white text-center space-y-2 flex flex-col'>
            <h2>
                <span className='text-6xl font-bold '>{option.price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl pb-2'>{ option.name}</h4>
            <div className='pb-4 flex-grow'>
                      {
                option.features.map((feature,id)=> <Feature key={id} feature={feature}></Feature>)
}
      </div>
<button className='btn text-2xl mt-6 bg-white text-[purple] rounded-xl w-full font-bold ft'>Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;