    while read -r line; do
        if [ ! -e data/$(basename $line) ]; then
            wget $line 
            if [ ${line: -3} == ".gz" ]; then
                gzip -d data/${line##*/}
            fi
        fi
    done < mbtiles-list