'use strict';

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const Category = app.model.define('category',
        {
            product_category: STRING(50),
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return Category;
};