import { getPossibleInputs } from '../helpers';

const digitsController = async ({ body: { digits } }, res, next) => {
  try {
    res.status(200).send(getPossibleInputs(digits));
    next();
  } catch (error) {
    next(error);
  }
};

export default digitsController;
