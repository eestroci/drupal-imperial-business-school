var searchPage = {
    batchSize: 20,
    endIndex: 0,
    query: null,
    //arrays to keep track the facet selection
    facetedkey: [],
    facetedvalue: [],

    init: function () {
        queryly.QuerylyKey = '9a40f60b2f074862';

        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0].toLowerCase() == 's') {
                searchPage.query = sParameterName[1] + ' ';
                break;
            }
        }
        if (searchPage.query != '' && searchPage.query != null) {
            searchPage.dofacetedsearch(0, '', '');


        }
    },

    atiTrack: function (link) {
        

    },

    //This render the faceted object into html. In the current rss feed, creator and pubdate are used in the facet.
    renderFaceted: function (faceted) {
        var html = '<style>fieldset {border:none;} fieldset a {text-decoration:none;color:#333;line-height:20px;}</style><div style="margin-top:10px;" ><h2>Filter Search</h2><a href="#" style="border-bottom:none;cursor:pointer" onclick="searchPage.dofacetedsearch(0,\'\',\'\');return false;">Clear All</a></div>';

                    

       
        html = html + "<fieldset>";
        html = html + '<div style="margin-top:10px;margin-bottom:10px;background:black;color:white;padding:6px;" ><legend><h3>Filter by Date</h3></legend></div>';
        //build the filters for publication date, data are grouped into buckets. for example, 168 means "published in the past 168 hours"
        var dates = faceted.pubDate;
        for (var i = 0; i < dates.length; i++) {
            var datename = '';
            if (dates[i].key == '24') {
                datename = "within 24 hours";
            }
            else if (dates[i].key == '168') {
                datename = "within one week";
            }
            else if (dates[i].key == '720') {
                datename = "within 30 days";
            }
            else if (dates[i].key == '8760') {
                datename = "within a year";
            }
            else if (dates[i].key == '26280') {
                datename = "within three years";
            }
            if (datename != '') {
                html = html + '<div><a href="#" tabindex="0" style="border-bottom:none;cursor:pointer;" onclick="searchPage.dofacetedsearch(0,\'pubDate\',\'' + encodeURIComponent(dates[i].key) + '\')";return false;">' + datename + '(' + dates[i].value + ')</a></div>';
            }
        }
        html = html + "</fieldset>";
        html = html + "<fieldset>";
        html = html + '<div style="margin-top:10px;margin-bottom:10px;background:black;color:white;padding:6px;" ><legend><h3>Filter by Section</h3></legend></div>';
        //build the filters for creator field
        var sections = faceted.section;
        for (var i = 0; i < sections.length; i++) {
            html = html + '<div><a href="#"  tabindex="0" style="border-bottom:none;cursor:pointer" onclick="searchPage.dofacetedsearch(0,\'section\',\'' + sections[i].key.replace(/'/g, "\\'") + '\')";return false;">' + sections[i].key + '(' + sections[i].value + ')</a></div>';
        }

        html = html + "</fieldset>";
        html = html + "<fieldset>";
        html = html + '<div style="margin-top:10px;margin-bottom:10px;background:black;color:white;padding:6px;" ><legend><h3>Filter by Topic</h3></legend></div>';
        //build the filters for creator field
        var topics = faceted.topic;
        for (var i = 0; i < topics.length; i++) {
            html = html + '<div><a href="#" tabindex="0" style="border-bottom:none;cursor:pointer" onclick="searchPage.dofacetedsearch(0,\'topic\',\'' + topics[i].key.replace(/'/g, "\\'") + '\')";return false;">' + topics[i].key + '(' + topics[i].value + ')</a></div>';
        }

        html = html + "</fieldset>";
        html = html + "<fieldset>";
        html = html + '<div style="margin-top:10px;margin-bottom:10px;background:black;color:white;padding:6px;" ><legend><h3>Filter by Tag</h3></legend></div>';
        //build the filters for creator field
        var tags = faceted.tag;
        for (var i = 0; i < tags.length; i++) {
            html = html + '<div><a href="#" tabindex="0" style="border-bottom:none;cursor:pointer" onclick="searchPage.dofacetedsearch(0,\'tag\',\'' + tags[i].key.replace(/'/g, "\\'") + '\')";return false;">' + tags[i].key + '(' + tags[i].value + ')</a></div>';
        }

        html = html + "</fieldset>";
        html = html + "<fieldset>";
        html = html + '<div style="margin-top:10px;margin-bottom:10px;background:black;color:white;padding:6px;" ><legend><h3>Filter by Content Type</h3></legend></div>';
        //build the filters for creator field
        var contenttypes = faceted.contenttype;
        for (var i = 0; i < contenttypes.length; i++) {
            html = html + '<div><a href="#"  tabindex="0" style="border-bottom:none;cursor:pointer" onclick="searchPage.dofacetedsearch(0,\'contenttype\',\'' + contenttypes[i].key.replace(/'/g, "\\'") + '\')";return false;">' + contenttypes[i].key + '(' + contenttypes[i].value + ')</a></div>';
        }

        html = html + "</fieldset>";
        html = html + "<fieldset>";
        html = html + '<div style="margin-top:10px;margin-bottom:10px;background:black;color:white;padding:6px;" ><legend><h3>Filter by Author</h3></legend></div>';
        //build the filters for creator field
        var creators = faceted.creator;
        for (var i = 0; i < creators.length; i++) {
            html = html + '<div><a href="#"  tabindex="0" style="border-bottom:none;cursor:pointer" onclick="searchPage.dofacetedsearch(0,\'creator\',\'' + creators[i].key.replace(/'/g, "\\'") + '\')";return false;">' + creators[i].key + '(' + creators[i].value + ')</a></div>';
        }
        html = html + "</fieldset>";

        document.getElementById('faceteddata').innerHTML = (html);
        
        //queryly.jquery('#faceteddata').html(html);
    },

    resultcallback: function (results) {
        //retrieve metadata
        var total = results.metadata.total;
        searchPage.endIndex = results.metadata.endindex;



        //if there is faceted data in results object, render it.
        if (results.faceted != null && results.faceted != undefined) {
            this.renderFaceted(results.faceted);
        }

        var pagerhtml = "<div style='margin-bottom: 12px; border-bottom: 1px solid #ccc;padding-bottom:10px;'><span style='font-size:28px;font-family:Open Sans;color:#777'><h2>Search results for <b style='color:black'>" + results.metadata.query + "</b></h2></div>";
        //loop through each result.
        for (var i = 0; i < results.items.length; i++) {
            //display search native ad if available
            if (results.ads != null && results.ads.length > 0) {
                for (var j = 0; j < results.ads.length; j++) {
                    if (results.ads[j].index == i) {
                        pagerhtml = pagerhtml + searchPage.renderitem(results.ads[j]);
                        break;
                    }
                }
            }

            var item = results.items[i];
            pagerhtml = pagerhtml + searchPage.renderitem(item);
        }

        pagerhtml = pagerhtml + "<nav aria-label='page'>";
        if (total > searchPage.endIndex) {
            pagerhtml = pagerhtml + '<a accesskey="n" href="#" tabindex="0" style="float:right;text-decoration:none;border-bottom:none;" onclick="searchPage.turnpage(' + searchPage.endIndex + ');return false;" href="#"><h2 style="color:#012b51;font-weight:bold;font-family:Open Sans">Next Page</h2></a>';
        }
        if (searchPage.endIndex > searchPage.batchSize) {
            var prev = Math.max(0, searchPage.endIndex - 2 * searchPage.batchSize);
            pagerhtml = pagerhtml + '<a accesskey="p" href="#" tabindex="0" style="float:left;text-decoration:none;border-bottom:none;" onclick="searchPage.turnpage(' + prev + ');return false;" href="#" ><h2 style="color:#012b51;font-weight:bold;font-family:Open Sans">Previous Page</h2></a>';
        }
        pagerhtml = pagerhtml + "</nav>";
        //queryly.jquery('#resultdata').append(pagerhtml);
       // queryly.jquery(document).scrollTop();
        document.getElementById('resultdata').innerHTML = pagerhtml;
        window.scrollTo(0, 0);
    },
    renderitem: function (item) {
        //item.link = item.link.replace("//sloanreview.mit.edu", "//staging.mitsmr.io");

        if (item.link.indexOf('?og=') > 0) {
            item.link = item.link.substring(0, item.link.indexOf('?og='));
        }
        var trackcall = 'onmousedown = "queryly.util.trackClick(\'' + item.link + '\',\'' + searchPage.query + '\');"';
        if (item.isad == 1) {
            trackcall = 'onmousedown = "queryly.util.trackAdClick(' + item._id + ')"';
        }

        if (item.sponsorship != 'undefined' && item.sponsorship.indexOf('Custom Studio') >= 0) {
            item.sponsored = 2;
        }
        else if (item.link.indexOf('sponsors-content') > 0) {
            item.sponsored = 1;
        }

        if ((new URL(item.link)).hostname != 'sloanreview.mit.edu') {
            item.link = item.link.replace(/^.*\/\/[^\/]+/, '');
        }

        if (item.image != "" && (new URL(item.image)).hostname != 'sloanreview.mit.edu') {
            item.image = item.image.replace(/^.*\/\/[^\/]+/, '');
        }

        item.link = item.link.replace(/(^\w+:|^)\/\//, '//');
        item.image =item.image.replace(/(^\w+:|^)\/\//, '//');

        if (window.location.hostname.toLowerCase() != 'sloanreview.mit.edu') {
            item.link = item.link.replace(/^.*\/\/[^\/]+/, '');
        }
        

        

        if (item.link.indexOf('#') > 0) {
            item.link = item.link.split('#')[0];
        }

        var html = '<div class="queryly_item_row" style="position:relative;overflow:hidden;width:100%;margin-bottom:10px;font-size:10px;border-bottom:1px solid #eee;padding-bottom:12px;max-height:180px;"><a ' + trackcall + ' href="' + item.link + '" style="text-decoration:none;color:#111">';
        if (item.image != '') {
            //item.image = item.image.replace("1440x756","275x173");
            //if (item.image.indexOf("-1200-") > 0) {
            //    item.image = item.image.substring(0, item.image.indexOf("-1200-")) + "-1200-300x300.jpg";
            //}
            //html = html + '<img style="padding:6px;padding-right:12px;float:left;width:170px;" onerror="this.parentNode.removeChild(this);" src="' + item.image + '" />';
            html = html + '<div style="width: 150px;height: 150px;float:left;margin-right: 10px;"><img onerror="queryly.util.removeNode(this.parentNode);" style="height: 150px;object-fit: cover;" src="' + item.image + '"/></div>';
        }
        html = html + '<div style="margin-top:0px;"><div class="queryly_item_title" style="line-height:20px;font-size:22px;margin-top:6px;color:#012b51;font-family:Open Sans">';

        if (item.sponsored == 2) {
            html = html + "<div style='background: orange;padding:3px;font-size:12px;color: white;margin-left:6px;position:absolute;'>MIT SMR Custom Studio</div><h3>" + item.title + "</h3></div></div>";
        }
        else if (item.isad == 1 || item.sponsored == 1) {
            html = html + "<div style='background: orange;padding:3px;font-size:12px;color: white;margin-left:6px;position:absolute;'>Sponsor's Content</div><h3>" + item.title + "</h3></div></div>";
        }
        else {
            html = html + "<h3>" + item.title + '</h3></div></div>';
        }

        var publishdate = item.pubdate;
        //if (item.isad == 1) {
        //    publishdate = '';
        //}

        if (item.summary != '') {
            item.description = item.summary;
        }

        html = html + '<div style="font-size:15px;color:#888;margin-top:4px;">By ' + item.creator + '  (' + publishdate + ')</div><div  class="queryly_item_description" style="font-size:15px;line-height:18px;margin-top:12px;">' + item.description.replace("\"", "").replace("'", "").replace(/(([^\s]+\s\s*){18})(.*)/, "$1...") + '</div>';
        html = html + '</a></div>';
        return html;
    },

    turnpage: function (index) {
        //queryly.jquery('#resultdata').html('');
        document.getElementById('resultdata').innerHTML = '';

        var keys = '';
        var values = ''
        for (var i = 0; i < searchPage.facetedkey.length; i++) {
            keys = keys + searchPage.facetedkey[i] + "|";
            values = values + searchPage.facetedvalue[i] + "|";
        }
        var url = "//api.queryly.com/json.aspx?queryly_key=" + queryly.QuerylyKey + "&query=" + searchPage.query + "&endindex=" + index + "&batchsize=" + searchPage.batchSize + "&callback=searchPage.resultcallback&showfaceted=true&timezoneoffset=" + (new Date(0)).getTimezoneOffset() + "&extendedDataFields=creator,sponsorship,summary";

        if (searchPage.facetedkey.length > 0) {
            url = url + "&facetedkey=" + encodeURIComponent(keys) + "&facetedvalue=" + encodeURIComponent(values);
        }

        //making the search call to Queryly server
        searchPage.loadScript(url, function (data, textStatus, jqxhr) {
            window.scrollTo(0, 0);
        });
    },


    //similar with dosearch method, but with faceted turned on. It passes in the current facet selection if any.
    dofacetedsearch: function (index, key, value) {
        //queryly.jquery('#resultdata').html('');
        if (document.querySelector('#resultdata') != null) {
            document.querySelector('#resultdata').innerHTML = '';
        }
        

        //assemble the rest api.
        var url = "//api.queryly.com/json.aspx?queryly_key=" + queryly.QuerylyKey + "&query=" + searchPage.query + "&endindex=" + index + "&batchsize=" + searchPage.batchSize + "&callback=searchPage.resultcallback&showfaceted=true&timezoneoffset=" + (new Date(0)).getTimezoneOffset() + "&extendedDataFields=creator,sponsorship,summary";

        if (key != '') {
            if (searchPage.facetedkey.indexOf(key) >= 0) {
                var i = searchPage.facetedkey.indexOf(key);
                searchPage.facetedvalue[i] = value;
            }
            else {
                searchPage.facetedkey.push(key);
                searchPage.facetedvalue.push(value);
            }

            var keys = '';
            var values = ''
            for (var i = 0; i < searchPage.facetedkey.length; i++) {
                keys = keys + searchPage.facetedkey[i] + "|";
                values = values + searchPage.facetedvalue[i] + "|";
            }

            url = url + "&facetedkey=" + encodeURIComponent(keys) + "&facetedvalue=" + encodeURIComponent(values);
        }
        else {
            searchPage.facetedkey = [];
            searchPage.facetedvalue = [];
        }

        //making the search call to Queryly server
        searchPage.loadScript(url, function (data, textStatus, jqxhr) {
            window.scrollTo(0, 0);
        });
    },
    loadScript: function (src, callback) {
        var script = document.createElement('script');
        var loaded = false;
        script.setAttribute('src', src);
        if (callback) {
            script.onreadystatechange = script.onload = function () {
                if (!loaded) {
                    callback();
                }
                loaded = true;
            };
        }
        document.head.appendChild(script);
    }

}
searchPage.init();
