package smartread.tag;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import edu.fudan.ml.types.Dictionary;
import edu.fudan.nlp.cn.tag.CWSTagger;
import edu.fudan.nlp.cn.tag.POSTagger;

public class ExtractTags {
    POSTagger tag;
    List<String> type;
    
    public ExtractTags(){
        CWSTagger cws;
        try {
            cws = new CWSTagger("./FundanNLPModel/seg.m", new Dictionary("./FundanNLPModel/dict.txt"));
            tag = new POSTagger(cws,"./FundanNLPModel/pos.m", new Dictionary("./FundanNLPModel/dict_pos.txt"), true);
        } catch (Exception e) {
            e.printStackTrace();
        }
        String[] lists = {"名词", "实体名", "机构名", "网址", "事件名", "品牌名", "地名", "人名", "品牌"};
        type = Arrays.asList(lists);
    }
    
    public List<String> getTags(String input){
        String[][] tagArray =tag.tag2Array(input);
        List<String> tags = new ArrayList<String>();
        for(int i=0; i<tagArray[0].length; i++){
            if(type.contains(tagArray[1][i])&&tagArray[0][i].length()>1){
                tags.add(tagArray[0][i]);
            }
        }
        return tags;
    }
    
    /**
     * @param args
     */
    public static void main(String[] args) {
        ExtractTags et = new ExtractTags();
        
        String str = "两性养生：女人初夜后的得与失（组图）";
        List<String> tags = et.getTags(str);
        for(String s:tags)
            System.out.println(s);
    }

}
