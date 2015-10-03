    while read -r line; do
        base=$(basename $line)
        if [ ! -e $base ] && [ ! -e ${base%.*} ]; then
            wget $line
            if [ ${line: -3} == ".gz" ]; then
                gzip -d ${line##*/}
            fi
        fi
    done < mbtiles-list
