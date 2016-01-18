/*
* Ads rotator plugin
*
* Pull in random ads via AJAX
*
* Options:
*   - num_displayed (integer): how many ads to show
*   - ads_sources (array): array of file paths
* */
(function($){
    'use strict';
    $.fn.adsRotator = function(opts){

        var defaultOptions = {
            ads_sources : ['ad1.html', 'ad2.html', 'ad3.html', 'ad4.html', 'ad5.html'],
            num_displayed : 2
        };

        var opts = $.extend({}, defaultOptions, opts);

        var $ads_area = this,
            ads_sources = opts.ads_sources,
            num_displayed = opts.num_displayed,
            selected_ads = [];

        //validate ad sources, reverting to default if needed
        if(!$.isArray(ads_sources) || ads_sources.length < 1){
            ads_sources = defaultOptions.ads_sources;
        }

        //validate the number of ads
        if(!$.isNumeric(num_displayed)){
            num_displayed = defaultOptions.num_displayed;
            //not too many
        }else if(num_displayed > ads_sources.length){
            num_displayed = ads_sources.length;
            //or too few
        }else if(num_displayed < 1){
            num_displayed = 1;
        }

        //collect as many random as we need
        for(var i=0; i< num_displayed; i++){
            //retrieve a random index from the array
            //see fn definition below
            var ad_index = randomIntFromInterval(0, ads_sources.length - 1);

            //add it to the selected ads array
            var selected_ad = ads_sources.slice(ad_index, ad_index + 1);
            selected_ads = selected_ads.concat(selected_ad);

            //remove the selected ad from the ads_sources array
            ads_sources.splice(ad_index, 1);
        }

        if(selected_ads.length > 0){
            //clear out the ads area
            $ads_area.html('');

            //jQuery.each is a safe way to iterate over an array of stuff
            jQuery.each(selected_ads, function loadAd(idx, src){

                $.get('ads/' + src, function(data){
                    $ads_area.append(data);
                });
            });
        }

        function randomIntFromInterval(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    };
})(jQuery);

$(document).ready(function(){
    'use strict';
    $(".our_partner").adsRotator({
        num_displayed : 1,
        ads_sources : ['ad3.html', 'ad4.html', 'ad5.html']
    });
});