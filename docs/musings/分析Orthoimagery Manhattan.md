# 分析 Orthoimagery Manhattan

::: info 数据来源
https://data.cityofnewyork.us/City-Government/2018-Orthoimagery-Manhattan/hxws-3mbm/data
:::

## 结论

先说结果。最重要的是 `xxxxxx.tab` 文件，每个 tab 文件包含最重要的信息，是每个不同的地理坐标和像素坐标的对应关系

如果我们按照 昵称 排序，类似于
```xml
000217.tab
000220.tab
000222.tab
000225.tab
..........为一组数据 文件命名类似于0002xx.tab

002222.tab
002227.tab
002255.tab
..........为一组数据 文件命名类似于0022xx.tab

同样
005227.tab
005247.tab
..........为另外一组数据 文件命名类似于0052xx.tab
```

其中包含

```xml
  (1000000.000000, 220000.000000) (0, 0) Label "NW",
  (1000000.000000, 217500.500000) (0, 4999) Label "SW",
  (1002499.500000, 220000.000000) (4999, 0) Label "NE",
  (1002499.500000, 217500.500000) (4999, 4999) Label "SE"
```

我们将它抽象成为
```xml
  (x, y) (0, 0) Label "NW",
  (x, y) (0, 4999) Label "SW",
  (x, y) (4999, 0) Label "NE",
  (x, y) (4999, 4999) Label "SE"
```

在同一组数据中的按昵称顺序排列，y value 每次增加 2500

在不同的一组数据中按昵称顺序排列，x value 每次增加 2500

## 文件分析

考虑如何分析文件，得先看懂文件，每一组文件分为 6 个部分，我们以 000217 举例。

```
000217.aux
000217.j2w
000217.jp2
000217.jp2.aux.xml
000217.jp2.xml
000217.tab
```
## aux

```aux
EHFA_HEADER_TAG           V  � &   {1:lversion,1:LfreeList,1:LrootEntryPtr,1:sentryHeaderLength,1:LdictionaryPtr,}Ehfa_File,{1:Lnext,1:Lprev,1:Lparent,1:Lchild,1:Ldata,1:ldataSize,64:cname,32:ctype,1:tmodTime,}Ehfa_Entry,{16:clabel,1:LheaderPtr,}Ehfa_HeaderTag,{1:LfreeList,1:lfreeSize,}Ehfa_FreeListNode,{1:lsize,1:Lptr,}Ehfa_Data,{1:lwidth,1:lheight,1:e3:thematic,athematic,fft of real-valued data,layerType,1:e13:u1,u2,u4,u8,s8,u16,s16,u32,s32,f32,f64,c64,c128,pixelType,1:lblockWidth,1:lblockHeight,}Eimg_Layer,{1:lwidth,1:lheight,1:e3:thematic,athematic,fft of real-valued data,layerType,1:e13:u1,u2,u4,u8,s8,u16,s16,u32,s32,f32,f64,c64,c128,pixelType,1:lblockWidth,1:lblockHeight,}Eimg_Layer_SubSample,{1:e2:raster,vector,type,1:LdictionaryPtr,}Ehfa_Layer,{1:LspaceUsedForRasterData,}ImgFormatInfo831,{1:sfileCode,1:Loffset,1:lsize,1:e2:false,true,logvalid,1:e2:no compression,ESRI GRID compression,compressionType,}Edms_VirtualBlockInfo,{1:lmin,1:lmax,}Edms_FreeIDList,{1:lnumvirtualblocks,1:lnumobjectsperblock,1:lnextobjectnum,1:e2:no compression,RLC compression,compressionType,0:poEdms_VirtualBlockInfo,blockinfo,0:poEdms_FreeIDList,freelist,1:tmodTime,}Edms_State,{0:pcstring,}Emif_String,{1:oEmif_String,fileName,2:LlayerStackValidFlagsOffset,2:LlayerStackDataOffset,1:LlayerStackCount,1:LlayerStackIndex,}ImgExternalRaster,{1:oEmif_String,algorithm,0:poEmif_String,nameList,}Eimg_RRDNamesList,{1:oEmif_String,projection,1:oEmif_String,units,}Eimg_MapInformation,{1:oEmif_String,dependent,}Eimg_DependentFile,{1:oEmif_String,ImageLayerName,}Eimg_DependentLayerName,{1:lnumrows,1:lnumcolumns,1:e13:EGDA_TYPE_U1,EGDA_TYPE_U2,EGDA_TYPE_U4,EGDA_TYPE_U8,EGDA_TYPE_S8,EGDA_TYPE_U16,EGDA_TYPE_S16,EGDA_TYPE_U32,EGDA_TYPE_S32,EGDA_TYPE_F32,EGDA_TYPE_F64,EGDA_TYPE_C64,EGDA_TYPE_C128,datatype,1:e4:EGDA_SCALAR_OBJECT,EGDA_TABLE_OBJECT,EGDA_MATRIX_OBJECT,EGDA_RASTER_OBJECT,objecttype,}Egda_BaseData,{1:*bvalueBD,}Eimg_NonInitializedValue,{1:dx,1:dy,}Eprj_Coordinate,{1:dwidth,1:dheight,}Eprj_Size,{0:pcproName,1:*oEprj_Coordinate,upperLeftCenter,1:*oEprj_Coordinate,lowerRightCenter,1:*oEprj_Size,pixelSize,0:pcunits,}Eprj_MapInfo,{0:pcdatumname,1:e3:EPRJ_DATUM_PARAMETRIC,EPRJ_DATUM_GRID,EPRJ_DATUM_REGRESSION,type,0:pdparams,0:pcgridname,}Eprj_Datum,{0:pcsphereName,1:da,1:db,1:deSquared,1:dradius,}Eprj_Spheroid,{1:e2:EPRJ_INTERNAL,EPRJ_EXTERNAL,proType,1:lproNumber,0:pcproExeName,0:pcproName,1:lproZone,0:pdproParams,1:*oEprj_Spheroid,proSpheroid,}Eprj_ProParameters,{1:dminimum,1:dmaximum,1:dmean,1:dmedian,1:dmode,1:dstddev,}Esta_Statistics,{1:lnumBins,1:e4:direct,linear,logarithmic,explicit,binFunctionType,1:dminLimit,1:dmaxLimit,1:*bbinLimits,}Edsc_BinFunction,{0:poEmif_String,LayerNames,1:*bExcludedValues,1:oEmif_String,AOIname,1:lSkipFactorX,1:lSkipFactorY,1:*oEdsc_BinFunction,BinFunction,}Eimg_StatisticsParameters830,{1:lnumrows,}Edsc_Table,{1:lnumRows,1:LcolumnDataPtr,1:e4:integer,real,complex,string,dataType,1:lmaxNumChars,}Edsc_Column,{1:lposition,0:pcname,1:e2:EMSC_FALSE,EMSC_TRUE,editable,1:e3:LEFT,CENTER,RIGHT,alignment,0:pcformat,1:e3:DEFAULT,APPLY,AUTO-APPLY,formulamode,0:pcformula,1:dcolumnwidth,0:pcunits,1:e5:NO_COLOR,RED,GREEN,BLUE,COLOR,colorflag,0:pcgreenname,0:pcbluename,}Eded_ColumnAttributes_1,{1:lversion,1:lnumobjects,1:e2:EAOI_UNION,EAOI_INTERSECTION,operation,}Eaoi_AreaOfInterest,{1:x{0:pcstring,}Emif_String,type,1:x{0:pcstring,}Emif_String,MIFDictionary,0:pCMIFObject,}Emif_MIFObject,{1:x{1:x{0:pcstring,}Emif_String,type,1:x{0:pcstring,}Emif_String,MIFDictionary,0:pCMIFObject,}Emif_MIFObject,projection,1:x{0:pcstring,}Emif_String,title,}Eprj_MapProjection842,{0:poEmif_String,titleList,}Exfr_GenericXFormHeader,{1:lorder,1:lnumdimtransform,1:lnumdimpolynomial,1:ltermcount,0:plexponentlist,1:*bpolycoefmtx,1:*bpolycoefvector,}Efga_Polynomial,. j  j  �      Z     Ehfa_Layer                                                      Ehfa_Layer                                `  {4096:cdata,}RasterDMS,. Q  �  �      �     Ehfa_Layer                                                      Ehfa_Layer                                �  {4096:cdata,}RasterDMS,. 8  �         �     Ehfa_Layer                                                      Ehfa_Layer                                �  {4096:cdata,}RasterDMS,.   �  E      7     Ehfa_Layer                                                      Ehfa_Layer                                =  {4096:cdata,}RasterDMS,.             �          root                                                            root                                    �      V  j  V     Layer_1                                                         Eimg_Layer                              �  �    @   @   �      �      �     DependentLayerName                                              Eimg_DependentLayerName                       Layer_1     �  V  �  {     Layer_2                                                         Eimg_Layer                              �  �    @   @   y      �           DependentLayerName                                              Eimg_DependentLayerName                       Layer_2  E  �  V  �  �     Layer_3                                                         Eimg_Layer                              �  �    @   @                4     DependentLayerName                                              Eimg_DependentLayerName                       Layer_3         V  �  �     Layer_4                                                         Eimg_Layer                              �  �    @   @   �      E      Y     DependentLayerName                                              Eimg_DependentLayerName                       Layer_4      �  �      �  g   Map_Info                                                        Eprj_MapInfo                               �  Unknown         ���.A    ��
A        ��.A    �
A   2        �?      �?   J  meters     y  �      �  g   Map_Info                                                        Eprj_MapInfo                               �  Unknown    �     ���.A    ��
A        ��.A    �
A           �?      �?   1  meters              �  g   Map_Info                                                        Eprj_MapInfo                               �  Unknown    �     ���.A    ��
A   �     ��.A    �
A            �?      �?     meters     �  E      �  g   Map_Info                                                        Eprj_MapInfo                               �  Unknown    �     ���.A    ��
A   �     ��.A    �
A   �        �?      �?   �  meters 
```

里面的内容有点乱码，不知道是什么，打开方式目前也没找到。

但是根据关键字能看出来一些信息

EHFA Header Tag: 应该是 Environmental Systems Research Institute 格式的文件头标签的一部分，可能是指ESRI的某种地理信息系统（GIS）文件格式，比如Imagine文件（.img）。

Ehfa_Entry, Ehfa_HeaderTag, Ehfa_FreeListNode: 这些标记指示文件结构的不同部分，可能包括文件条目、头标签和空闲节点列表等。

Eimg_Layer, Eimg_Layer_SubSample, Ehfa_Layer: 指示图像或地图层的信息，可能包含有关图层类型、像素类型、数据的压缩方式等的数据。

ImgFormatInfo, Edms_VirtualBlockInfo, Eprj_MapInfo: 这些标记涉及图像格式信息、虚拟块信息和地图投影信息，表明文件可能包含地理空间数据和元数据。

## j2w

.j2w 文件是一个 JPEG 2000 World File 的扩展名。World Files 用于存储地理定位信息，

可以被地理信息系统（GIS）软件准确地放置在地球的正确位置上

```python
0.500000000000000 #每个像素的X方向上的地面大小，表示一个像素代表地面上的0.5单位长度。
0.000000000000000 #图像X方向的旋转参数，0意味着没有旋转。
0.000000000000000 #图像Y方向的旋转参数，同样0表示没有旋转。
-0.500000000000000 #每个像素的Y方向上的地面大小，负值表示Y坐标随着图像向下的方向增加而减少，这是典型的地图投影中的表示方式。
1000000.250000000000000 #图像左上角像素中心的X坐标（经度）。
219999.750000000000000 #图像左上角像素中心的Y坐标（纬度）。
```


## jp2.aux.xml

```xml
<PAMDataset>
    <SRS>PROJCS[&quot;NAD_1983_2011_StatePlane_New_York_Long_Isl_FIPS_3104_Ft_US&quot;,GEOGCS[&quot;GCS_NAD_1983_2011&quot;,DATUM[&quot;D_NAD_1983_2011&quot;,SPHEROID[&quot;GRS_1980&quot;,6378137,298.257222101]],PRIMEM[&quot;Greenwich&quot;,0],UNIT[&quot;Degree&quot;,0.017453292519943295]],PROJECTION[&quot;Lambert_Conformal_Conic&quot;],PARAMETER[&quot;standard_parallel_1&quot;,40.66666666666666],PARAMETER[&quot;standard_parallel_2&quot;,41.03333333333333],PARAMETER[&quot;latitude_of_origin&quot;,40.16666666666666],PARAMETER[&quot;central_meridian&quot;,-74],PARAMETER[&quot;false_easting&quot;,984250],PARAMETER[&quot;false_northing&quot;,0],UNIT[&quot;Foot_US&quot;,0.30480060960121924]]</SRS>
    <GeoTransform>1.0000000000000000e+06, 5.0000000000000000e-01, 0.0000000000000000e+00, 2.2000000000000000e+05,
        0.0000000000000000e+00, -5.0000000000000000e-01
    </GeoTransform>
</PAMDataset>
```

这个数组定义了像素与地理坐标之间的转换关系，包括图像的原点坐标（左上角），像素大小（在地面上的实际大小），以及旋转参数（这里为0，意味着图像与地理坐标轴正对齐）。

例子中的1.0000000000000000e+06和2.2000000000000000e+05分别是图像左上角的X和Y坐标。5.0000000000000000e-01和-5.0000000000000000e-01分别是图像在X和Y方向上的像素大小，Y方向上为负值表示图像的Y坐标是从上到下增加的。

## jp2.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<metadata xml:lang="en">
    <Esri>
        <CreaDate>20180912</CreaDate>
        <CreaTime>18333900</CreaTime>
        <ArcGISFormat>1.0</ArcGISFormat>
        <SyncOnce>TRUE</SyncOnce>
        <DataProperties>
            <lineage>
                <Process
                        ToolSource="c:\program files (x86)\arcgis\desktop10.5\ArcToolbox\Toolboxes\Data Management Tools.tbx\DefineProjection"
                        Date="20180912" Time="183339">DefineProjection 000217-RGBI-50cm.tif
                    PROJCS['NAD_1983_2011_StatePlane_New_York_Long_Isl_FIPS_3104_Ft_US',GEOGCS['GCS_NAD_1983_2011',DATUM['D_NAD_1983_2011',SPHEROID['GRS_1980',6378137.0,298.257222101]],PRIMEM['Greenwich',0.0],UNIT['Degree',0.0174532925199433]],PROJECTION['Lambert_Conformal_Conic'],PARAMETER['False_Easting',984250.0],PARAMETER['False_Northing',0.0],PARAMETER['Central_Meridian',-74.0],PARAMETER['Standard_Parallel_1',40.66666666666666],PARAMETER['Standard_Parallel_2',41.03333333333333],PARAMETER['Latitude_Of_Origin',40.16666666666666],UNIT['Foot_US',0.3048006096012192]]
                </Process>
            </lineage>
        </DataProperties>
    </Esri>
</metadata>
```

CreaDate 和 CreaTime 字段指示文件的创建日期和时间，这里分别是2018年9月12日和18时33分39秒。

ArcGISFormat 指的是使用的ArcGIS格式版本，这里是1.0。

SyncOnce 表明数据同步的属性，这里设置为TRUE，可能意味着这个元数据只需要同步一次。

## tab

```xml
!version 300
!charset WindowsLatin1

Definition Table
  File "000217.jp2"
  Type "RASTER"
  (1000000.000000, 220000.000000) (0, 0) Label "NW",
  (1000000.000000, 217500.500000) (0, 4999) Label "SW",
  (1002499.500000, 220000.000000) (4999, 0) Label "NE",
  (1002499.500000, 217500.500000) (4999, 4999) Label "SE"
  CoordSys Earth Projection 3, 74, "survey ft", -74, 40.1666666666667, 40.6666666666667, 41.0333333333333, 984250, 0
  Units "survey ft"
```

地理坐标和像素坐标的对应关系

接下来的四行定义了图像角点的地理坐标和对应的像素坐标，标签NW（西北）、SW（西南）、NE（东北）、SE（东南）

分别代表图像的四个角。这为图像在地理空间中的定位提供了必要的参照。

其中

```xml
  (1000000.000000, 220000.000000) (0, 0) Label "NW",
  (1000000.000000, 217500.500000) (0, 4999) Label "SW",
  (1002499.500000, 220000.000000) (4999, 0) Label "NE",
  (1002499.500000, 217500.500000) (4999, 4999) Label "SE"
```

NW (西北角):

地理坐标：(1000000.000000, 220000.000000)
像素坐标：(0, 0)
标签："NW"
SW (西南角):

地理坐标：(1000000.000000, 217500.500000)
像素坐标：(0, 4999)
标签："SW"
NE (东北角):

地理坐标：(1002499.500000, 220000.000000)
像素坐标：(4999, 0)
标签："NE"
SE (东南角):

地理坐标：(1002499.500000, 217500.500000)
像素坐标：(4999, 4999)
标签："SE"

```xml
CoordSys Earth Projection 3, 74, "survey ft", -74, 40.1666666666667, 40.6666666666667, 41.0333333333333, 984250, 0
Units "survey ft"
```

这些坐标说明了图像的西北角位于地理坐标(1000000, 220000)，而东南角位于(1002499.5, 217500.5)，并且图像宽度和高度分别大约为2500美国测量英尺和2500美国测量英尺，考虑到单位是“survey feet”。像素坐标显示图像的分辨率为5000x5000像素。