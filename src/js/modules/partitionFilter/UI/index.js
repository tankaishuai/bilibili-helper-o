/**
 * Author: memorydream
 * Create: 2020/10/22
 * Description: 屏蔽主页上的分区
 */

import {UI} from 'Libs/UI';
import _ from 'lodash';
import $ from 'jquery';
import {__} from 'Utils/functions';

export class PartitionFilterUI extends UI {

    constructor() {
        super({
            name: 'PartitionFilter',
        });
    }

    keyToListBoxText = {
        'life': __('partitionFilter_subPage_options_life'),
        'live': __('partitionFilter_subPage_options_live'),
        'ent': __('partitionFilter_subPage_options_ent'),
        'read': __('partitionFilter_subPage_options_read'),
        'game': __('partitionFilter_subPage_options_game'),
        'music': __('partitionFilter_subPage_options_music'),
        'dance': __('partitionFilter_subPage_options_dance'),
        'anime': __('partitionFilter_subPage_options_anime'),
        'douga': __('partitionFilter_subPage_options_douga'),
        'digital': __('partitionFilter_subPage_options_digital'),
        'movie': __('partitionFilter_subPage_options_movie'),
        'manga': __('partitionFilter_subPage_options_manga'),
        'cheese': __('partitionFilter_subPage_options_cheese'),
        'kichiku': __('partitionFilter_subPage_options_kichiku'),
        'fashion': __('partitionFilter_subPage_options_fashion'),
        'teleplay': __('partitionFilter_subPage_options_teleplay'),
        'film': __('partitionFilter_subPage_options_film'),
        'guochuang': __('partitionFilter_subPage_options_guochuang'),
        'technology': __('partitionFilter_subPage_options_technology'),
        'information': __('partitionFilter_subPage_options_information'),
        'documentary': __('partitionFilter_subPage_options_documentary'),
        'food': __('partitionFilter_subPage_options_food'),
    };

    listBoxTextToItem = {};

    load = (containers, settings) => {
        if (!settings.on) { return Promise.resolve(); }

        return new Promise(resolve => {
            let listBox = document.querySelectorAll('.item.sortable');

            if (listBox.length > 0) {
                _.forEach(listBox, (item) => {
                    this.listBoxTextToItem[item.innerText] = item;
                });

                const filterList = _.filter(settings.subPage.options, (o) => o.on === true);
                _.forEach(filterList, (v) => {
                    this.filterMain(v.key);
                    this.filterListBox(v.key);
                });
            }
            resolve();
        });
    };

    getFilterItemInListBox = (key) => {
        return this.listBoxTextToItem[this.keyToListBoxText[key]];
    };

    filterMain = (key) => {
        $('#bili_' + key).hide();
    };

    filterListBox = (key) => {
        this.getFilterItemInListBox(key).style.display = 'none';
    };
}