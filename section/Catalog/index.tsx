import React from 'react';
import CategoryItem from '../../components/CategoryItem';
import FilterCatalog from '../../components/FilterCatalog';
import FilterSource from '../../components/FilterSource';
import Item from '../../components/Item';
import ItemFilterCatalog from '../../components/ItemFilterCatalog';
import styles from '../../styles';
type CatalogProps = {};

const Catalog = (props: CatalogProps) => {
  return (
    <section className={`${styles.xPaddings} flex flex-col`}>
      <div className="flex flex-col w-full">
        <div className="flex flex-row md:justify-between items-center justify-center w-full">
          <div>
            <p className=" hidden md:block  text-gray font-normal">
              621 Product
            </p>
          </div>
          <div className="flex justify-center ">
            <FilterCatalog />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
